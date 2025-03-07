import Section from "../common/Section";
import SongCard from "../common/SongCard";

interface Props {
  songs: Song[];
  title: string;
  moreLink: string;
  onItemClick: (song: Song) => void;
}

export default function SectionPanel({
  songs,
  title,
  moreLink,
  onItemClick,
}: Props) {
  return (
    <Section>
      <Section.Title className="flex justify-between">
        <span>{title}</span>
        <a className="font-medium text-gray300 text-16" href={moreLink}>
          All
        </a>
      </Section.Title>
      <Section.Content>
        <div className="flex">
          {songs?.map((song) => (
            <SongCard
              key={song.id}
              variant="vertical"
              className="shrink-0"
              onClick={() => onItemClick(song)}
            >
              <SongCard.Image src={song.album.thumbnail} alt={song.title} />
              <SongCard.Content>
                <SongCard.Title>{song.title}</SongCard.Title>
                <SongCard.Description>
                  {song.album.artist.name ?? ""} 
                </SongCard.Description>
              </SongCard.Content>
            </SongCard>
          ))}
        </div>
      </Section.Content>
    </Section>
  );
}
