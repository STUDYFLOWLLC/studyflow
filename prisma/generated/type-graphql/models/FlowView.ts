import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Flow } from "../models/Flow";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("FlowView", {
  isAbstract: true
})
export class FlowView {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowViewID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_Flow?: Flow | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID?: string | null;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;
}
