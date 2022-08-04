import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FlashcardOrderByWithAggregationInput } from "../../../inputs/FlashcardOrderByWithAggregationInput";
import { FlashcardScalarWhereWithAggregatesInput } from "../../../inputs/FlashcardScalarWhereWithAggregatesInput";
import { FlashcardWhereInput } from "../../../inputs/FlashcardWhereInput";
import { FlashcardScalarFieldEnum } from "../../../../enums/FlashcardScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFlashcardArgs {
  @TypeGraphQL.Field(_type => FlashcardWhereInput, {
    nullable: true
  })
  where?: FlashcardWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FlashcardOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FlashcardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"FlashcardID" | "CreatedTime" | "DeletedTime" | "FK_FlashcardStackID" | "Position" | "Front" | "FrontImageUrl" | "Back" | "BackImageUrl">;

  @TypeGraphQL.Field(_type => FlashcardScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FlashcardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
