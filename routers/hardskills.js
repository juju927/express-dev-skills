const express = require("express");
const router = express.Router();
const HardSkills = require("../models/HardSkills");
const {
  getSkills,
  postSkill,
  putSkill,
  deleteSkillByID,
  patchSkill,
} = require("../controllers/hardskills");
const { check } = require("express-validator");

router.get("/hardskills", getSkills);
router.post("/hardskills", postSkill);
router.put(
  "/hardskills",
  [
    check("language", "a language is required").not().isEmpty(),
    check("level", "a skill level is required").not().isEmpty(),
  ],
  putSkill
);
router.delete("/hardskills", deleteSkillByID);
router.patch("/hardskills/:id", patchSkill);

module.exports = router;
