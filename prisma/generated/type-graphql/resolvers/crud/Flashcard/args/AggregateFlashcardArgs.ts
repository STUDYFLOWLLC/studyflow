import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardOrderByWithRelationInput } from "../../../inputs/FlashcardOrderByWithRelationInput";
import { FlashcardWhereInput } from "../../../inputs/FlashcardWhereInput";
import { FlashcardWhereUniqueInput } from "../../../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  where?: FlashcardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashcardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashcardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}