const { Sequelize } = require("sequelize");
const { DataTypes } = Sequelize;
const db = require("../config/database");
const generateMD5 = require("../utils/generate-md5");
const User = require("./user-model");

const Report = db.define(
  "reports",
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: () => generateMD5(),
      allowNull: false,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    patient_first_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    patient_last_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    patient_gender: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    patient_age: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    therapy_start_date: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    therapy_end_date: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    indication_common: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    indication_other: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    total_dosing_per_cycle: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    clinical_result: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_mild: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_mild_desc: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_moderate: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_moderate_desc: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_severe: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    s_effects_severe_desc: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    md_name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    md_clinic: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    md_phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    md_email: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Report);
Report.belongsTo(User, { foreignKey: "userId" });

module.exports = Report;
