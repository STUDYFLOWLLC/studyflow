import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserOrderByRelationAggregateInput } from "../inputs/CourseOnUserOrderByRelationAggregateInput";
import { ProfessorOrderByRelationAggregateInput } from "../inputs/ProfessorOrderByRelationAggregateInput";
import { SchoolOrderByWithRelationInput } from "../inputs/SchoolOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOrderByWithRelationInput", {
  isAbstract: true
})
export class CourseOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CourseID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CreatedTime?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SchoolOrderByWithRelationInput, {
    nullable: true
  })
  FK_School?: SchoolOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FK_SchoolID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProfessorOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Professors?: ProfessorOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserOrderByRelationAggregateInput, {
    nullable: true
  })
  FK_Users?: CourseOnUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  IsOfficial?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Term?: "asc" | "desc" | undefined;
}
