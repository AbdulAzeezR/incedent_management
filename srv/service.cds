using { bookshop as my } from '../db/schema';

@path : '/service/bookshop'
service bookshopService
{
    @odata.draft.enabled
    entity Categories as
        projection on my.Categories;

    entity Products as
        projection on my.Products;
}

annotate bookshopService with @requires :
[
    'authenticated-user'
];
