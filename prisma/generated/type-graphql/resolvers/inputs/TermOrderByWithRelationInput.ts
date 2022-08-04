import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermOrderByRelationAggregateInput } from "../inputs/CourseOnTermOrderByRelationAggregateInput";
import { SchoolOrderByWithRelationInput } from "../inputs/SchoolOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TermOrderByWithRelationInput", {
  isAbstract: true
})
export class TermOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TermName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationInput, {
    nullable: true
  })
  FK_User?: UserOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_UserID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermOrderByRelationAggregateInput | undefined;
}
