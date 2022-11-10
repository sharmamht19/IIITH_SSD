
# Question 1

## Assumption
-No assumption.

## Overview 
- flask , flask_sqlalchemy , flask_marshmallow should be installed.
- SQLite is configured for databased.
## Execution 

```
pipenv shell
then--
	python
		then--
		from server import db
		 app.app_context().push()
		 db.create_all()
```

***