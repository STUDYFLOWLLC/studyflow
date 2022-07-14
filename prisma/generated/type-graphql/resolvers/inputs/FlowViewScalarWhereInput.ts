import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowViewScalarWhereInput", {
  isAbstract: true
})
export class FlowViewScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlowViewScalarWhereInput], {
    nullable: true
  })
  AND?: FlowViewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereInput], {
    nullable: true
  })
  OR?: FlowViewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowViewScalarWhereInput], {
    nullable: true
  })
  NOT?: FlowViewScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowViewID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableFilter | undefined;
}
