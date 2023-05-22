import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import css from '../Styles.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setValue(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchForm_button}>
          <span>
            <AiOutlineSearch fill="black" size="20px" />
          </span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputChange}
          value={value}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// export class Searchbar extends Component {
//   state = {
//     value: '',
//   };
//   handleInputChange = event => {
//     const { value } = event.currentTarget;

//     this.setState({ value });
//   };
//   handleSubmit = event => {
//     const { value } = this.state;
//     event.preventDefault();
//     this.props.onSubmit(value);
//   };
//   render() {
// return (
//   <header className={css.Searchbar}>
//     <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//       <button type="submit" className={css.SearchForm_button}>
//         <span>
//           <AiOutlineSearch fill="black" size="20px" />
//         </span>
//       </button>

//       <input
//         className={css.SearchForm_input}
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         onChange={this.handleInputChange}
//         value={this.state.value}
//       />
//     </form>
//   </header>
// );
//   }
// }
