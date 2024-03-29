import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TaskLabelScalarWhereInput", {
  isAbstract: true
})
export class TaskLabelScalarWhereInput {
  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereInput], {
    nullable: true
  })
  AND?: TaskLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereInput], {
    nullable: true
  })
  OR?: TaskLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskLabelScalarWhereInput], {
    nullable: true
  })
  NOT?: TaskLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  TaskLabelID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_TaskID?: StringNullableFilter | undefined;
}
