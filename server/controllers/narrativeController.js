```javascript
const Narrative = require('../models/Narrative');

// Fetch all narrative elements
exports.getAllNarratives = async (req, res) => {
    try {
        const narratives = await Narrative.find();
        res.status(200).json({
            status: 'success',
            results: narratives.length,
            data: {
                narratives
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Fetch a specific narrative element
exports.getNarrative = async (req, res) => {
    try {
        const narrative = await Narrative.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                narrative
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Create a new narrative element
exports.createNarrative = async (req, res) => {
    try {
        const newNarrative = await Narrative.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                narrative: newNarrative
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// Update a narrative element
exports.updateNarrative = async (req, res) => {
    try {
        const narrative = await Narrative.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                narrative
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Delete a narrative element
exports.deleteNarrative = async (req, res) => {
    try {
        await Narrative.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
```