import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Sound 1',
    artist: '',
    albumArtUrl: "https://i.ibb.co/2WVf9FL/2.jpg",
    audioUrl: "https://www.sleepphones.com/files/AMinorThing.mp3",
  },
  {
    title: 'Sound 2',
    artist: '',
    albumArtUrl: "https://i.ibb.co/2F148Pc/1.jpg",
    audioUrl: 'https://www.sleepphones.com/files/PentatonicWaves.mp3',
  },
  {
    title: 'Sound 3',
    artist: '',
    albumArtUrl: 'https://i.ibb.co/xzk41hV/image.jpg',
    audioUrl: 'https://www.sleepphones.com/files/AMinorThing.mp3',
  },
];

export default class music extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


