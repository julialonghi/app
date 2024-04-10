static associate(models) {
    Tracking.belongsTo(models.User);
    Tracking.hasMany(models.Product);
  }