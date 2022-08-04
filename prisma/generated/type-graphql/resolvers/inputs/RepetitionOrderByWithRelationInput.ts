import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackOrderByWithRelationInput } from "../inputs/FlashcardStackOrderByWithRelationInput";
import { FlowOrderByWithRelationInput } from "../inputs/FlowOrderByWithRelationInput";
import { TaskOrderByRelationAggregateInput } from "../inputs/TaskOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RepetitionOrderByWithRelationInput", {
  isAbstract: true
})
export class RepetitionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RepetitionID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DeletedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RepetitionType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByWithRelationInput, {
    nullable: true
  })
  FK_Flow?: FlowOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackOrderByWithRelationInput, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_FlashcardStackID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TaskOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Tasks?: TaskOrderByRelationAggregateInput | undefined;
}
