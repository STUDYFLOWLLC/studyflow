import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardStackOrderByWithRelationInput } from "../../../inputs/FlashcardStackOrderByWithRelationInput";
import { FlashcardStackWhereInput } from "../../../inputs/FlashcardStackWhereInput";
import { FlashcardStackWhereUniqueInput } from "../../../inputs/FlashcardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlashcardStackArgs {
  @TypeGraphQL.Field(_type => FlashcardStackWhereInput, {
    nullable: true
  })
  where?: FlashcardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashcardStackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashcardStackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
