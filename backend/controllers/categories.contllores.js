const express = require('express')
const mongoose = require('mongoose')
const categories = require('../models/categoriesmodel') // Mongoose schema

// ✅ Add Category
const addcategories = async (req, res) => {
  try {
    const {category, description, status } = req.body
    const newCategory = new categories({
      category_name:category,
      description,
      status
    })
    await newCategory.save()
    res.json({ message: '✔️data well inserted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: '⚠️error occured' })
  }
}

// ✅ Read All Categories
const readcategories = async (req, res) => {
  try {
    const result = await categories.find()
    res.json({ result })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: '⚠️error occured' })
  }
}

// ✅ Update Category
const updatecategory = async (req, res) => {
  try {
    const { id, category, description, status } = req.body
    const result = await categories.findByIdAndUpdate(
      id,
      { category_name:category, description, status },
      { new: true }
    )
    if (!result) return res.status(404).json({ message: '⚠️category not found' })
    res.json({ message: '✔️data well updated' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: '⚠️error occured' })
  }
}

// ✅ Delete Category
const deletecategory = async (req, res) => {
  try {
    const { id } = req.params
    const result = await categories.findByIdAndDelete(id)
    if (!result) return res.status(404).json({ message: '⚠️category not found' })
    res.json({ message: '✔️data deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: '⚠️error occured' })
  }
}

module.exports = { addcategories, readcategories, updatecategory, deletecategory }
