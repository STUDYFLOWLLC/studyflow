import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("ProfessorsOnCoursesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ProfessorsOnCoursesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ProfessorsOnCoursesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ProfessorsOnCoursesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProfessorsOnCoursesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ProfessorsOnCoursesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ProfessorsOnCoursesID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_ProfessorID?: IntWithAggregatesFilter | undefined;
}
