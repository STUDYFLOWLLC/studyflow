import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FlowTagOnFlow } from "../models/FlowTagOnFlow";
import { User } from "../models/User";
import { FlowTagCount } from "../resolvers/outputs/FlowTagCount";

@TypeGraphQL.ObjectType("FlowTag", {
  isAbstract: true
})
export class FlowTag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  FlowTagID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  FK_Flows?: FlowTagOnFlow[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  Public!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Name!: string;

  @TypeGraphQL.Field(_type => FlowTagCount, {
    nullable: true
  })
  _count?: FlowTagCount | null;
}
