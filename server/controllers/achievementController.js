```javascript
const Achievement = require('../models/Achievement');

// Fetch all achievements
exports.getAllAchievements = async (req, res) => {
    try {
        const achievements = await Achievement.find();
        res.status(200).json({
            status: 'success',
            results: achievements.length,
            data: {
                achievements
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Fetch a specific achievement
exports.getAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                achievement
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Create a new achievement
exports.createAchievement = async (req, res) => {
    try {
        const newAchievement = await Achievement.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                achievement: newAchievement
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// Update an achievement
exports.updateAchievement = async (req, res) => {
    try {
        const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                achievement
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Delete an achievement
exports.deleteAchievement = async (req, res) => {
    try {
        await Achievement.findByIdAndDelete(req.params.id);
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