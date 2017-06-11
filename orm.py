class ModelMetaClass(type):
    '''
    Model meta class
    '''
    def __new__(cls, name, bases, attrs):
        cls.__fields__ = {}
        cls.__table__ = name
        print 'bases: ', bases
        print 'name: ', name
        print 'class: ', cls
        for var, value in attrs.items():
            if not var.startswith('__'):
                if isinstance(value, Field):
                    cls.__fields__[var] = value.type
        return type.__new__(cls, name, bases, attrs)


class Model(object):
    __metaclass__ = ModelMetaClass


class Field(object):
    def __init__(self):
        self.type = None
        self.name = None


class IntegerField(Field):
    def __init__(self, name=None):
        self.type = 'int'
        self.name = name


class StringField(Field):
    def __init__(self, name=None):
        self.type = 'varchar(10)'
        self.name = name


class User(Model):
    age = IntegerField()
    name = StringField()
    sex = StringField()
    role = StringField()

if __name__ == '__main__':
    print '-'*100
    print 'table: ', User.__table__ if hasattr(User, '__table__') else None
    for k,v in User.__fields__.items():
        print k,v