namespace bookshop;

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    extensible,
    managed,
    temporal
}
from '@sap/cds/common';

entity Products
{
    key ProductID : Integer;
    ProductName : String(100);
    UnitsInStock : Integer;
    Category : Association to one Categories;
}

entity Categories
{
    key CategoryID : Integer;
    CategoryName : String(100);
    Description : String;
    Products : Association to many Products on Products.Category = $self;
}
