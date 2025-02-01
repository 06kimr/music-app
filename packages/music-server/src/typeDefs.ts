import { gql } from "apollo-server";

export const typeDefs = gql`
  type Artist {
    id: ID!
    name: String!
    albums: [Album!]
  }
  type Album {
    id: ID!
    title: String!
    artist: Artist!
    songs: [Song!]
    thumbnail: String!
  }
  type Song {
    id: ID!
    title: String!
    genres: [Genre!]!
    album: Album!
    path: String!
  }
  type Genre {
    id: ID!
    name: String!
  }

  type MixMaker {
    id: ID!
    name: String!
    songs: [Song!]
    description: String!
  }
  type Query {
    genres: [Genre!]!
    artists: [Artist!]!
    artist(id: ID!): Artist
    songs: [Song!]!
    albums: [Album!]!
    mixMakers: [MixMaker!]!
  }
  type Mutation {
    addGenre(name: String!): Genre!
    addArtist(name: String!): Artist!
    addSong(
      title: String!
      albumId: ID!
      genreIds: [ID!]!
      path: String!
    ): Song!
    addAlbum(
      title: String!
      artistId: ID!
      releaseDate: String!
      thumbnail: String!
    ): Album!
    addMixMaker(name: String!, songIds: [ID!]!, description: String!): MixMaker!
  }
`;
