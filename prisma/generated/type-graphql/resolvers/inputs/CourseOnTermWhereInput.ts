import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlowListRelationFilter } from "../inputs/FlowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { TermRelationFilter } from "../inputs/TermRelationFilter";

@TypeGraphQL.InputType("CourseOnTermWhereInput", {
  isAbstract: true
})
export class CourseOnTermWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  AND?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  OR?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  NOT?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnTermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_CourseID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => TermRelationFilter, {
    nullable: true
  })
  FK_Term?: TermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_TermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FlowListRelationFilter, {
    nullable: true
  })
  FK_Flows?: FlowListRelationFilter | undefined;
}
