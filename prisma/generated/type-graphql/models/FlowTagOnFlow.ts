import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Flow } from "../models/Flow";
import { FlowTag } from "../models/FlowTag";

@TypeGraphQL.ObjectType("FlowTagOnFlow", {
  isAbstract: true
})
export class FlowTagOnFlow {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowTagOnFlowID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | null;

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowID?: number | null;

  FK_FlowTag?: FlowTag | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_FlowTagID?: number | null;
}
