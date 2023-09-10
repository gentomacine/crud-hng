import User from '../model/user.model.js'

// Create a new user
export const createUser = async (req, res) => {
    try {
      // Check if a user with the same name already exists
      const existingUser = await User.findOne({ full_name: req.body.full_name });
  
      if (existingUser) {
        return res.status(400).json({ error: 'User with the same name already exists' });
      }
  
      const user = new User(req.body);
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  


// Get a user by name
export const getUserByName = async (req, res) => {
    try {
      // Retrieve the value of the "full_name" query parameter
      const { full_name } = req.query;
  
      // Create a regular expression pattern with the "full_name" query parameter
      const regex = new RegExp(full_name, 'i');
  
      // Search for the user by full_name using the case-insensitive regular expression
      const user = await User.findOne({ full_name: { $regex: regex } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({
        full_name: user.full_name,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Delete a user by name
export const deleteUser = async (req, res) => {
    try {
    const user = await User.findByIdAndDelete(req.params.Id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      const updatedUserData = req.body; 
  
      // Use findByIdAndUpdate to update the user by user ID
      const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
