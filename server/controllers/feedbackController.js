```javascript
const Feedback = require('../models/Feedback');

// Fetch all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json({ feedbacks });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback' });
    }
};

// Fetch a single feedback
exports.getFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        res.status(200).json({ feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback' });
    }
};

// Create a new feedback
exports.createFeedback = async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        const feedback = await newFeedback.save();
        res.status(201).json({ feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error creating feedback' });
    }
};

// Update a feedback
exports.updateFeedback = async (req, res) => {
    try {
        const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error updating feedback' });
    }
};

// Delete a feedback
exports.deleteFeedback = async (req, res) => {
    try {
        await Feedback.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'Feedback deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting feedback' });
    }
};
```