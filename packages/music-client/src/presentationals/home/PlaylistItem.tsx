import { useState } from "react";
import SongCard from "../common/SongCard";
import MenuIcon from "@/assets/icons/more_horiz.svg?react";
import Menu from "@/containers/common/Menu";
import AddIcon from "@/assets/icons/add.svg?react";
import AddCircleIcon from "@/assets/icons/add_circle.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";

interface Props {
  song: Song;
  playlists: Playlist[];
  onClick: (song: Song) => void;
  onRemoveFromPlaylist: (song: Song) => void;
  onAddPlaylist: (song: Song) => void;
  onAddSongToPlaylist: (id: number, song: Song) => void;
  onLikeSong: (song: Song) => void;
}

export default function PlaylistItem({
  song,
  onClick,
  playlists,
  onRemoveFromPlaylist,
  onAddPlaylist,
  onAddSongToPlaylist,
  onLikeSong,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative flex" onClick={() => onClick(song)}>
      <button
        className="absolute z-10 top-10 right-17"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuIcon />
      </button>
      {open && (
        <Menu
          className="absolute right-0 left-auto z-20 top-48"
          onClose={() => setOpen(false)}
        >
          <Menu.MenuItem
            label={
              <div className="flex">
                <AddIcon className="mr-6" />
                <span>플레이리스트에 추가하기</span>
              </div>
            }
            value="1"
          >
            <Menu.SubMenu>
              <Menu.MenuItem
                label={
                  <div className="flex">
                    <AddIcon className="mr-6" />
                    <span>새 플레이리스트</span>
                  </div>
                }
                onSelect={() => onAddPlaylist(song)}
                value="sub1"
              />
              {playlists.map((playlist) => (
                <Menu.MenuItem
                  label={playlist.name}
                  value={`${playlist.id}`}
                  onSelect={() => onAddSongToPlaylist(playlist.id, song)}
                />
              ))}
              <Menu.MenuItem label="수능 전 절대 금지곡" value="sub2" />
              <Menu.MenuItem
                label={
                  <div className="flex">
                    <span>자동 재생 부르는 봄 캐럴</span>
                  </div>
                }
                value="sub2"
              />
              <Menu.MenuItem
                label={
                  <div className="flex">
                    <span>운동할때</span>
                  </div>
                }
                value="sub2"
              />
            </Menu.SubMenu>
          </Menu.MenuItem>

          <Menu.MenuItem
            label={
              <div className="flex">
                <AddCircleIcon className="mr-6" />
                <span>좋아요 표시한 곡에 저장하기</span>
              </div>
            }
            value="2"
            onSelect={() => onLikeSong(song)}
          />
          <Menu.MenuItem
            label={
              <div className="flex">
                <DeleteIcon className="mr-6" />
                <span>재생목록에서 삭제</span>
              </div>
            }
            onSelect={() => onRemoveFromPlaylist(song)}
            value="3"
          />
        </Menu>
      )}
      <SongCard variant="horizontal">
        <SongCard.Image src={song.album.thumbnail} alt={song.title} />
        <SongCard.Content>
          <SongCard.Title>{song.title}</SongCard.Title>
          <SongCard.Description>{song.album.artist.name}</SongCard.Description>
        </SongCard.Content>
      </SongCard>
    </li>
  );
}
