import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackOrderByRelationAggregateInput } from "../inputs/FlashCardStackOrderByRelationAggregateInput";
import { FlowTagOnFlowOrderByRelationAggregateInput } from "../inputs/FlowTagOnFlowOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FlowOrderByWithRelationInput", {
  isAbstract: true
})
export class FlowOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FlowID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  FK_User?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FlowTagOnFlowOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Tags?: FlowTagOnFlowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Body?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Visibility?: "asc" | "desc" | undefined;
}
