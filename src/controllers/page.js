import mongoose from 'mongoose'

import Page from '../models/Page.js'

export const getAllPage = async(req, res) => {
	try{
		const result = await Page.find({})

		res.json(result)
	} catch(e) {
		res.json({"error": e.toString()})
	}
}

export const getPageByName = async(req, res) => {
	const {pageName} = req.body

	const condition = {
		pageName: pageName
	}
	try{
		const result = await Page.findOne(condition)

		res.json(result)
	} catch(e) {
		res.json({"error": e.toString()})
	}
}

export const addPage = async (req, res) => {
	const {pageName} = req.body

	const value = {
		pageName: pageName
	}

	try{
		const result = await Page.create(value)

		res.json(result)
	} catch(e) {
		console.log(e)
		res.json({error: e.toString()})
	}
}

export const removePage = async (req, res) => {
	const {pageId} = req.body
	const condition = {
		_id: mongoose.Types.ObjectId(pageId),
	}

	try{
		const result = await Page.deleteOne(condition)

		res.json(result)
	} catch(e) {
		res.json({error: e.toString()})
	}
}

export const addSection = async (req, res) => {
	const {pageId, sectionName, marker, text} = req.body

	let section = {
		sectionName: sectionName,
		marker: marker, 
		text: text
	}
	const condition = {
		_id: mongoose.Types.ObjectId(pageId)
	}

	const update = {
		$push: {
			sections: section
		}
	}

	const options ={
		new: true
	}

	try{
		const result = await Page.findOneAndUpdate(condition, update, options)

		res.json(result)
	} catch(e) {
		res.json({error: e.toString()})
	}
}

export const editSection = async (req, res) => {
	const {pageId, sectionId, sectionName, marker, text} = req.body

	let section = {
		sectionName: sectionName,
		marker: marker, 
		text: text
	}

	const condition = {
		_id: mongoose.Types.ObjectId(pageId),
		'sections._id' : mongoose.Types.ObjectId(sectionId)
	}

	const update = {
		$set: {
			'sections.$': section 
		}
	}

	try{
		const result = await Page.updateOne(condition, update)
	
		res.json(result)
	} catch(e) {
		res.json({"error": e.toString()})
	}
}

export const removeSection = async (req, res) => {
	const {pageId, sectionId} = req.body

	const condition = {
		_id: mongoose.Types.ObjectId(pageId),
	}

	const update = {
		$pull: {
				sections: {	'_id': mongoose.Types.ObjectId(sectionId)}
		}
	}

	try{
		const result = await Page.findOneAndUpdate(condition, update)

		res.json(result)
	} catch(e) {
		res.json({"error": e.toString()})
	}
}
