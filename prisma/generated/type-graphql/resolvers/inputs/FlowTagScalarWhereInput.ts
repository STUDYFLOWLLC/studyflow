import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FlowTagScalarWhereInput", {
  isAbstract: true
})
export class FlowTagScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlowTagScalarWhereInput], {
    nullable: true
  })
  AND?: FlowTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarWhereInput], {
    nullable: true
  })
  OR?: FlowTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagScalarWhereInput], {
    nullable: true
  })
  NOT?: FlowTagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowTagID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  Public?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Name?: StringFilter | undefined;
}
