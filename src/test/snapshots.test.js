import React from 'react';
import App from '../pages/App';
import Homepage from '../pages/Homepage';
import SearchBar from '../components/searchBar';
import ListImg from '../components/listImg';
import LinkPages from '../components/linkPages';
import Images from '../components/images';
import renderer from 'react-test-renderer';

describe('App', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<App />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('Homepage', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Homepage />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('SearchBar', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<SearchBar />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('ListImg', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<ListImg />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('LinkPages', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<LinkPages />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});

describe('Images', () => {
    test('snapshot renders', () => {
      const component = renderer.create(<Images />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
});