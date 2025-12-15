import express from "express"

import {
  getAllPage,
  addPage,
  removePage,
  addSection,
  editSection,
  removeSection,
  getPageByName,
} from "../controllers/page.js"

const router = express.Router()

router.post("/getAllPage", getAllPage)

router.post("/getPageByName", getPageByName)

router.post("/addPage", addPage)

router.post("/removePage", removePage)

router.post("/addSection", addSection)

router.post("/editSection", editSection)

router.post("/removeSection", removeSection)

router.post("/removeSection", removeSection)

export default router
