const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
    console.log('Find All Success');
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
    console.log('Find All Success');
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTagName = await Tag.create(req.body);
    res.status(200).json(newTagName);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (!updateTagData[0]) {
      res.status(404).json({ message: `Tag ID ${req.params.id} not found.` });
      return;
    }
    res.status(200).json({ message: `Successfully updated Tag ID ${req.params.id}` });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagToDelete = await Tag.destroy({
      where: {
        id: params.id
      }
    });
    if (!tagToDelete) {
      res.status(404).json({ message: `Tag with ID ${req.params.id} not found` });
      return;
    };
    res.status(200).json(`Successfully deleted Tag ID ${req.params.id}`);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
