import Sequelize from 'sequelize';

var sequelize;

if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialectOptions: {
      ssl: true
    }
  });
} else {
  sequelize = new Sequelize(
    'graphqlserverdb',
    'graphqlserverdb', 
    'graphqlserverdb', 
    {
      host: 'localhost',
      dialect: 'postgres',
    },
  );
}

const db = {
  User: sequelize.import('./user')
};

// Object.keys(db).forEach((model) => {
//   if ('associate' in db[model]) {
//     db[model].associate(db)''
//   }
// })

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;