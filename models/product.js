static associate(models) {
    Product.belongsTo(models.Tracking);
  }