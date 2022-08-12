import { useDispatch, useSelector } from 'react-redux';
import {change} from 'redux/filterSlicer';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = (value) => {
    dispatch(change(value));
  }

  return (
    <>
     <Label htmlFor="filter">
      <h2>Find contacts by name</h2>
      <Input type="text" value={filter} onChange={(e) => handleFilterChange(e.target.value)}/>
      </Label>
    </>
  );
};
