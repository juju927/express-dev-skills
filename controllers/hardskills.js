const { validationResult } = require('express-validator');
const HardSkills = require('../models/HardSkills')


const getSkills = (req, res) => {
  res.json(HardSkills);
}

const postSkill = (req, res) => {
  const skill = HardSkills.filter((item) => item.id == req.body.id);
  res.json(skill[0])
}

const putSkill = (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const newSkill = {
    id: HardSkills[-1].id + 1,
    language: req.body.language,
    level: req.body.level
  };

  HardSkills.push(newSkill);
  res.json(HardSkills);
}

const deleteSkillByID = (req, res) => {
  for (let i = 0; i < HardSkills.length; i++) {
    if (HardSkills[i].id == req.body.id) {
      HardSkills.splice(i, 1);
      break;
    }
  }
  res.json(HardSkills);
}

const patchSkill = (req, res) => {
  for (let i = 0; i < HardSkills.length; i++) {
    if (HardSkills[i].id == req.params.id) {
      HardSkills[i] = req.body;
      break;
    }
  }
  res.json(HardSkills);
}

module.exports = {
  getSkills, 
  postSkill,
  putSkill,
  deleteSkillByID,
  patchSkill
}