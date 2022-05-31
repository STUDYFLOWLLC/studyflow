import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserOrderByRelationAggregateInput } from "../inputs/CourseOnUserOrderByRelationAggregateInput";
import { FlashCardStackOrderByRelationAggregateInput } from "../inputs/FlashCardStackOrderByRelationAggregateInput";
import { FlowOrderByRelationAggregateInput } from "../inputs/FlowOrderByRelationAggregateInput";
import { FlowTagOrderByRelationAggregateInput } from "../inputs/FlowTagOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SetupComplete?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  SupabaseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ProfilePictureLink?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  DefaultVisibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Courses?: CourseOnUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Flows?: FlowOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlowTagOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlowTags?: FlowTagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackOrderByRelationAggregateInput | undefined;
}
