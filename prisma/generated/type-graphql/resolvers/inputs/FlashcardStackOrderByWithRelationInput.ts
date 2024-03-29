import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardOrderByRelationAggregateInput } from "../inputs/FlashcardOrderByRelationAggregateInput";
import { FlashcardStackReviewOrderByRelationAggregateInput } from "../inputs/FlashcardStackReviewOrderByRelationAggregateInput";
import { FlowOrderByWithRelationInput } from "../inputs/FlowOrderByWithRelationInput";
import { RepetitionOrderByWithRelationInput } from "../inputs/RepetitionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlashcardStackOrderByWithRelationInput", {
  isAbstract: true
})
export class FlashcardStackOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DeletedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByWithRelationInput, {
    nullable: true
  })
  FK_Flow?: FlowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Flashcards?: FlashcardOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlashcardStackReviews?: FlashcardStackReviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RepetitionOrderByWithRelationInput, {
    nullable: true
  })
  FK_Repetition?: RepetitionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Description?: "asc" | "desc" | undefined;
}
