import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowTagOnFlowScalarWhereInput", {
  isAbstract: true
})
export class FlowTagOnFlowScalarWhereInput {
  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereInput], {
    nullable: true
  })
  AND?: FlowTagOnFlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereInput], {
    nullable: true
  })
  OR?: FlowTagOnFlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowTagOnFlowScalarWhereInput], {
    nullable: true
  })
  NOT?: FlowTagOnFlowScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowTagOnFlowID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HOLDER?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_FlowTagID?: IntNullableFilter | undefined;
}
