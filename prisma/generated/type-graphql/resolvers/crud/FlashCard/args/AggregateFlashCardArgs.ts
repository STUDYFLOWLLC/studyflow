import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardOrderByWithRelationInput } from "../../../inputs/FlashCardOrderByWithRelationInput";
import { FlashCardWhereInput } from "../../../inputs/FlashCardWhereInput";
import { FlashCardWhereUniqueInput } from "../../../inputs/FlashCardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlashCardArgs {
  @TypeGraphQL.Field(_type => FlashCardWhereInput, {
    nullable: true
  })
  where?: FlashCardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashCardOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashCardOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashCardWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
