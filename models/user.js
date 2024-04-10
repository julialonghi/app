static associate(models) {
    User.hasMany(models.Tracking);
  }