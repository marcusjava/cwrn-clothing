import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const shopDirectory = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopDirectory],
  (shop) => shop.collections
);

export const selectCollection = (collection) =>
  createSelector([selectShopCollections], (collections) => {
    return collections
      ? Object.keys(collections)
          .map((key) => collections[key])
          .find((item) => item.routeName === collection)
      : null;
  });

export const selectCollectionForPreview = createSelector(
  [selectCollection],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
  [shopDirectory],
  (shop) => shop.loading
);
