const getAllItems = async (_req, res) => {
  try {
    const items = null;

    if (!items.length) {
      return res.status(404).json({ message: "No items found" });
    }

    res.json(items);
  } catch (error) {
    res
      .status(500)
      .json({ mesesage: `Error fetching items database: ${error}` });
  }
};

const getItemById = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = null;

    if (!item) {
      return res.status(404).json({
        message: `Could not find item with ID: ${itemId}¬¬`,
      });
    }

    res.json(item);
  } catch (error) {
    res
      .status(500)
      .json({ mesesage: `Error fetching from database: ${error}¬¬` });
  }
};

const addItem = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "You must provide ... ",
    });
  }

  try {
    const newItemId = req.body.id;

    const newItem = req.body;

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({
      mesesage: `Error writing to database: ${error}`,
    });
  }
};

const updateItem = async (req, res) => {
  const itemId = req.params.id;
  if (!req.body) {
    return res.status(400).json({
      message: "You must provide ... ",
    });
  }

  try {
    const item = null;
    if (!item) {
      return res
        .status(404)
        .json({ message: `Could not find item with ID: ${itemId}` });
    }

    // update

    const updatedItem = null;
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({
      mesesage: `Error fetching from database: ${error}`,
    });
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = null;

    if (!item) {
      return res
        .status(404)
        .json({ message: `Could not find item with ID: ${itemId}` });
    }

    // delete

    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      mesesage: `Error deleting item from database: ${error}`,
    });
  }
};

export { getAllItems, getItemById, addItem, updateItem, deleteItem };
