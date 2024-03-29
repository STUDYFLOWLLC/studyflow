import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Friendship", {
  isAbstract: true
})
export class Friendship {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FriendshipID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  SentTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  AcceptedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RejectedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  RemovedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CanceledTime?: Date | null;

  FK_UserFrom?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserFromID?: number | null;

  FK_UserTo?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserToID?: number | null;
}
