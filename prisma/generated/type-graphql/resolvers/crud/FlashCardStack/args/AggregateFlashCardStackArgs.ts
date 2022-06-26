import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashCardStackOrderByWithRelationInput } from "../../../inputs/FlashCardStackOrderByWithRelationInput";
import { FlashCardStackWhereInput } from "../../../inputs/FlashCardStackWhereInput";
import { FlashCardStackWhereUniqueInput } from "../../../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFlashCardStackArgs {
  @TypeGraphQL.Field(_type => FlashCardStackWhereInput, {
    nullable: true
  })
  where?: FlashCardStackWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FlashCardStackOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackWhereUniqueInput, {
    nullable: true
  })
  cursor?: FlashCardStackWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
