import { useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header/Header';
import ImageGridList from '../../components/ImgGridList/ImgGridList';
import SearchTextField from '../../components/SearchTextField/SearchTextField';

function SearchPage () {
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  let history = useHistory();

  // const onAddCaption = () => {
  //   history.push("/customize-image");
  // }
  return (
    <>
      <Header title={"Search Image Page"} />
      <SearchTextField
        label={"Search images here"}
        setSearchedPhotos={setSearchedPhotos}
      />
      {searchedPhotos.length > 0 && (
        <ImageGridList
          tileData={searchedPhotos}
          history={history}
          // onAddCaption={onAddCaption}
        />
      )}
    </>
  );
}
export default SearchPage;