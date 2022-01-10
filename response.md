# Response
  Current contest as an example. Feel free to edit/remove it.

## Required
### API Document
  
[API Document](./api_document.md)

### Deployment

1. Install packages: ```npm install```
2. Start MySQL server
3. Import database:
    1. ```mysql -u <user_name> -p <db_name> < phantom_mask_db.sql```
    2. ```mysql -u <user_name> -p <test_db_name> < phantom_mask_db_test.sql``` (Optional)
4. Create config: ```.env``` (You can copy the schema from template: ```.env-template```)
    1. set `DB_HOST`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE` for MySQL server (`DB_DATABASE_TEST` is Optional)
    2. set `NODE_ENV` to `development` for development
5. Start server: ```node app.js```

### Integration Test (Optional)

1. Import ```phantom_mask_db_test.sql``` into database 
2. Set  ```DATABASE_TEST``` key to ```phantom_mask_test_db``` 

#### For Macbook or Linux
3. Run integration test: ```npm run test```

#### For Windows:
3. Run integration test: ```npm run test_windows```

## Bonus
### Test Coverage Report
 

### Dockerized
  check my dockerfile [here](./Dockerfile)

### Demo Site Url
  demo site is ready on http://54.199.156.86/
