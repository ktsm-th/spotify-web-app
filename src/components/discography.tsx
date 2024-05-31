'use client'

import { useState } from 'react';
import Carousel from '@/components/carousel';

export default function Discography({ albumData, singleData }) {
  const [selectedAlbums, setSelectedAlbums] = useState(albumData.items);
  const [selectedOption, setSelectedOption] = useState('album');

  const handleSelection = (selection: string) => {
    (selection === 'album') ?
      setSelectedAlbums(albumData.items) :
      setSelectedAlbums(singleData.items);

    setSelectedOption(selection);
  }

  return (
    <div className="mt-4 flex flex-col grid-cols-4 gap-4 justify-center max-w-3xl ">
      <h2 className="font-bold text-2xl">Discography</h2>
      <div className="flex">
        <button className={
          selectedOption === 'album' ?
            'flex justify-left px-4 py-1 rounded-full bg-zinc-700 w-fit mr-2 cursor-pointer hover:bg-zinc-700' :
            'flex justify-left px-4 py-1 rounded-full bg-zinc-800 w-fit mr-2 cursor-pointer hover:bg-zinc-700'
        } onClick={() => handleSelection('album')}>
          Albums
        </button>
        <button className={
          selectedOption === 'single' ?
            'flex justify-left px-4 py-1 rounded-full bg-zinc-700 w-fit mr-2 cursor-pointer hover:bg-zinc-700' :
            'flex justify-left px-4 py-1 rounded-full bg-zinc-800 w-fit mr-2 cursor-pointer hover:bg-zinc-700'
        } onClick={() => handleSelection('single')}>
          Singles & EPs
        </button>
      </div>
      <Carousel albums={selectedAlbums} />
    </div>
  );
}
